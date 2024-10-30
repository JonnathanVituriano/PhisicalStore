function calcularDistancia (lat1, lng1, lat2, lng2) {
    const R = 6371; //Raio da Terra em km
    const dlat = (lat2 - lat1) * Math.PI / 180;
    const dlng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dlng / 2) * Math.sin(dlng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; //Distancia em km 
}

module.exports = { calcularDistancia };