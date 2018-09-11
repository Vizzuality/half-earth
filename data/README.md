# Data pipeline for Half-Earth project

Data pipelines writte in Python 3.6

## Install dependencies
`
pip install -r requirements.txt
`

## Generate layers.csv

To generate the `layers.csv` file used as the control table, run:

`
python process.py
`
An output file will be sent to `./outputs`, which can be uploaded to the `half-earth` Carto account.

## Generate Pledge layers

Execute:
`
python pledges.py
`

This will generate a shapefile in the `./outputs` folder containing the locations of all pledges that could be sucsessfully geocoded. The geocoding relies on a variety of services (mapbox, arcgis, google, open street map).
The source data is not included, due to privacy, contact a project owner if you seek that file.