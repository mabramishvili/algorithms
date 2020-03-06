function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    if(bc + z < wc){
        wc = bc + z;
    }
    if(wc + z < bc){
        bc = wc + z;
    }
    return wc*w+bc*b;
}
