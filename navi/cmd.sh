time docker run --name osm-importer --memory=4G --cpus="8" -v /home/randop/Downloads/philippines-latest.osm.pbf:/data.osm.pbf -v openstreetmap-data:/var/lib/postgresql/12/main overv/openstreetmap-tile-server:1.3.10 import


docker run --name maptiler -p 9000:80 -e ALLOW_CORS=enabled -v openstreetmap-data:/var/lib/postgresql/12/main -d overv/openstreetmap-tile-server:1.3.10 run

docker run --name maptiler -p 9000:80 -e ALLOW_CORS=enabled -d randop/maptiler run