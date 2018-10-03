import json
import random
import pandas as pd
from pprint import pprint
from os import listdir
from os.path import isfile, join
from colorama import Fore, Back, Style

def tile_template(l):
    json_item = {
            "slug": f"{l.get('slug')}",
            "dataset": f"{l.get('dataset','null')}",
            "name": f"{l.get('layer_name')}",
            "provider": "cesium",
            "iso": f"{l.get('iso', [])}",
            "env": "production",
            "layer_config": {
                "body": {
                    "maxzoom": f"{l.get('maxZoom')}",
                    "format": "image/png",
                    "options": {
                        "useCors": 'true'
                    },
                    "type": "tileLayer",
                    "url": f"{l.get('url')}",
                    "bbox": l.get('bbox', []),
                    "landscape_opacity": l.get('landscape_opacity', 1),
                },
                "type": "tileLayer",
                "params_config": [{
                    "key": "dataMaxZoom",
                    "required": 'true',
                    "default": f"{l.get('maxZoom')}"
                }]
            },
            "legend_config":l.get('legendConfig'),
            "interaction_config": {}
                    }
    return json_item

def carto_template(l):
    json_item = {
            "slug": f"{l.get('slug')}",
            "dataset": f"{l.get('dataset','null')}",
            "name": f"{l.get('layer_name','null')}",
            "provider": "cartodb",
            "env": "production",
            "iso": f"{l.get('iso', [])}",
            "layer_config": {
                "body": {
                    "maxzoom": f"{l.get('maxZoom')}",
                    "format": "image/png",
                    "layers":[
                                {"options": {'cartocss': f"{l.get('cartocss')}",
                                            'cartocss_version': '2.3.0',
                                            'sql': f"{l.get('sql')}"},
                                "type": "cartodb"}
                            ],
                    "url": f"{l.get('url')}",
                    "bbox": l.get('bbox', []),
                    "landscape_opacity": l.get('landscape_opacity', 1),
                },
                "account":"half-earth",
                "type": "layer",
                "sql_config": f"{l.get('sql_config',[])}",
                "params_config": json.dumps(l.get('params_config',[]))
            },
            "legend_config": l.get('legendConfig',{}),
            "interaction_config": l.get('interactionConfig',{})
                    }
    return json_item

if __name__ == '__main__':
    mypath = "./layers/"
    layerfiles = [f for f in listdir(mypath) if isfile(join(mypath, f)) and 'json' in f]
    layers = []
    for file in layerfiles:
        print(f'reading {file}')
        with open(f"{mypath}/{file}") as f:
            try:
                layers.append(json.load(f))
            except:
                raise NameError(f'Problem with layer {file}')
    print(f"loaded {len(layers)} layers")
    rows = []
    for l in layers:
        tmp = f"{l.get('dataset')} {l.get('layer_name')}"
        if l.get("is_tile_layer"):
            print(Fore.BLUE + f'{tmp}: tile layer')
            rows.append(tile_template(l))
        else:
            print(Fore.BLUE + f'{tmp}: Carto layer')
            rows.append(carto_template(l))

    df = pd.DataFrame(rows)

    json_layerConfig = []
    for item in df['layer_config']:
        json_layerConfig.append(json.dumps(item))
        #if item.get('type') == 'layer' and item.get('params_config') != '[]':
         #   print(item)
            # test = item.get('params_config')
            # print('raw', test)
            # print('moded', json.dumps(test))

    df['layer_config'] = json_layerConfig

    json_legendConfig = []
    for item in df['legend_config']:
        json_legendConfig.append(json.dumps(item))
    df['legend_config'] = json_legendConfig

    json_interactionConfig = []
    for item in df['interaction_config']:
        json_interactionConfig.append(json.dumps(item))
    df['interaction_config'] = json_interactionConfig

    df.to_csv('./outputs/layers.csv', index=False)
    print(Fore.GREEN +f"Sucsessfully generated layers.csv with {len(df)} rows.")