## Generate shapefile of pledge output
import pandas as pd
import json
import numpy as np
from colorama import Fore, Style
from shapely.geometry import Point
import time
import geocoder   #https://pypi.python.org/pypi/geocoder
import geopandas as gpd
import requests_cache

requests_cache.install_cache('demo_cache')

def search_location(place):
    """Use Geopy to geocode an address string  https://github.com/geopy/geopy
    """
    g = geocoder.google(place)
    if g.error:
        print(Fore.RED + f'Google Error: {g.error}')
    else:
        print(Fore.GREEN + 'located via google')
        return g.geojson
    # if google errored, try OSM
    osm = geocoder.osm(place)
    if osm.error:
        print(Fore.RED +  f'OSM Error: {g.error}')
    else:
        print(Fore.GREEN + 'located via OSM')
        return osm.geojson
    # if google and osm, errroed, try mapbox
    mb = geocoder.mapbox(place)
    if mb.error:
        print(Fore.RED + f'MapBox Error: {mb.error}')
    else:
        print(Fore.GREEN + 'located via mapbox')
        return mb.geojson
    # else try arcgis
    arc = geocoder.arcgis(place)
    if arc.error:
        print(Fore.RED + f'Arcgis Error: {arc.error}')
    else:
        print(Fore.GREEN + 'located via arcgis online')
        return arc.geojson
    print(Fore.RED + "Giving up search")
    return None


def pass_zipcodes(code):
    cond1 = len(str(code)) ==  5
    if cond1:
        try:
            tmp = int(code)
            return tmp
        except:
            return None
    cond2 = len(str(code)) > 6 and '-' in str(code)
    if cond2:
        try:
            tmp = str(code).split('-')[0]
            tmp = int(tmp)
            return tmp
        except:
            return None

if __name__ == '__main__':
    raw = pd.read_csv('./data/contact_export_082218_0843.csv')
    locations = []
    for code, country in zip(raw['zip'], raw['country']):
        c = pass_zipcodes(code)
        if c:
            country_is_string = type(country) is str
            if country_is_string:
                place = f"{code}, {country}"
                print(Fore.BLUE + f'Searcing: {place}')
                locations.append(search_location(place))
            else:
                place = f"{c}, USA"
                print(f'Searcing: {place}')
                locations.append(search_location(place))

    points = []
    for location in locations:
        if len(location.get('features')) > 0:
            lat = location.get('features')[0].get('properties').get('lat', None)
            lng = location.get('features')[0].get('properties').get('lng', None)
            if lat and lng:
                points.append(Point([lng, lat]))

    df = gpd.GeoDataFrame(list(range(len(points))),columns=['id'],
                    geometry=points, crs={'proj':'longlat', 'ellps':'WGS84', 'datum':'WGS84'})

    df.to_file('./outputs/pledges/pledge_locations.shp', driver='ESRI Shapefile')
    print(Fore.GREEN + f"Wrote out {len(df)} points to pledges shapefile.")