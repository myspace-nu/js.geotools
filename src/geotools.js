"use strict";

function geotools(){
	var instance = this;
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
		this.fromZip = function(zip){
			for(var i in instance.zipdb){
				if(zip>=instance.zipdb[i].a && zip <=instance.zipdb[i].b){
					this.latitude = instance.zipdb[i].t;
					this.longitude = instance.zipdb[i].n;
				}
			}
			return this;
		}
		return this;
	}
	return this;
}
