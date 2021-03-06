"use strict";

function geotools(){
	var instance = this;
	this.earthRadius = 6371008;
	this.position = function(latitude,longitude,altitude){
		if(typeof latitude == 'object'){
			this.latitude = latitude.latitude;
			this.longitude = latitude.longitude;
			this.altitude = latitude.altitude;
		} else {
			this.latitude = latitude;
			this.longitude = longitude;
			this.altitude = altitude;
		}
		this.distanceTo = function(destination){
			var earthRadius = 6371008;
			var dLat = (destination.latitude-this.latitude) * (Math.PI / 180);
			var dLon = (destination.longitude-this.longitude) * (Math.PI / 180);
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(this.latitude * (Math.PI / 180)) * Math.cos(destination.latitude * (Math.PI / 180)) * 
				Math.sin(dLon/2) * Math.sin(dLon/2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			return earthRadius * c;
		}
		this.displace = function(bearing, distance){
			var lat = this.latitude * (Math.PI/180);
			var lon = this.longitude * (Math.PI/180);
			var lat2 = Math.asin( Math.sin(lat)*Math.cos(distance/this.earthRadius) +
				 Math.cos(lat)*Math.sin(distance/this.earthRadius)*Math.cos(bearing));
			var lon2 = lon + Math.atan2(Math.sin(bearing)*Math.sin(distance/this.earthRadius)*Math.cos(lat),
				Math.cos(distance/this.earthRadius)-Math.sin(lat)*Math.sin(lat2))
			lat2 = lat2 * (180/Math.PI);
			lon2 = lon2 * (180/Math.PI);
			return new this.position({ 'latitude':lat2, 'longitude':lon2 });
		}
		this.fromZip = function(zip){
			for(var i in instance.zipdb){
				if(zip>=instance.zipdb[i].a && zip <=instance.zipdb[i].b){
					this.latitude = instance.zipdb[i].t;
					this.longitude = instance.zipdb[i].n;
					this.city = instance.zipdb[i].c;
					this.county = instance.zipdb[i].r;
				}
			}
			return this;
		}
		return this;
	}
	return this;
}
