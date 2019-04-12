import pandas as pd
from colorama import Fore, Style

df = pd.read_json("./inputs/places_to_watch.json")
df.rename(columns={'Latitude': 'lat', 'Longtitude':'lon','ID':'image'}, inplace=True)
images = [f"{i}.jpg" for i in df['image']]
df['image'] = images
df.to_csv('./outputs/places_to_watch.csv',index=False)
print(Fore.GREEN + 'Created outputs/places_to_watch.csv')

### After this point you will need to upload the places_to_watch.csv to Cart
### and then run the following SQL.
print(Fore.WHITE + "Upload output file to Carto and run following SQL:")

q = ("WITH a as (SELECT cell_id, the_geom FROM marine_grid"
    "      UNION"
    "       SELECT cell_id, the_geom FROM terrestrial_grid),"
    " c as (SELECT b.image, a.cell_id"
    "       FROM places_to_watch as b, a"
    "       WHERE ST_intersects(b.the_geom,a.the_geom))"
    "    SELECT d.the_geom, d.description, d.image, d.lat, d.lon, d.places, d.region, c.cell_id FROM  places_to_watch as d"
    "    INNER JOIN c ON d.image = c.image"
    "    ORDER BY d.image"
)

print(q)