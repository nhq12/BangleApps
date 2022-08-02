(()=>{
  var alt="";
  var lastDraw=0;
  Bangle.on('pressure', (p)=>{
    if (p.altitude != alt) {
      alt=p.altitude.toFixed(); 
      var w = WIDGETS["widalt"].width;
      WIDGETS["widalt"].width = 1 + (alt.length)*12;
      if (w!=WIDGETS["widalt"].width) Bangle.drawWidgets();
      WIDGETS["widalt"].draw();
    }
  });
  function draw() {
    if (Date().getTime()-lastDraw<60000) return;
    lastDraw=Date().getTime();
    if (!Bangle.isLCDOn()) return; 
    setTimeout(()=> {
      try {Bangle.getPressure().then();}
      catch(err) {}
    }, 60000);
    g.reset();
    g.setColor(g.theme.bg);
    g.fillRect(this.x, this.y, this.x + this.width, this.y + 23); 
    g.setColor(g.theme.fg);  g.setFontCustom(atob("AAAAABwAAOAAAgAAHAADwAD4AB8AB8AA+AAeAADAAAAOAAP+AH/8B4DwMAGBgAwMAGBgAwOAOA//gD/4AD4AAAAAAAABgAAcAwDAGAwAwP/+B//wAAGAAAwAAGAAAAAAAAIAwHgOA4DwMA+BgOwMDmBg4wOeGA/gwDwGAAAAAAAAAGAHA8A4DwMAGBhAwMMGBjgwOcOA+/gDj4AAAAABgAAcAAHgADsAA5gAOMAHBgBwMAP/+B//wABgAAMAAAAAAAgD4OB/AwOYGBjAwMYGBjBwMe8Bh/AIHwAAAAAAAAAfAAP8AHxwB8GAdgwPMGBxgwMOOAB/gAH4AAAAAAABgAAMAABgAwMAeBgPgMHwBj4AN8AB+AAPAABAAAAAAAMfAH38B/xwMcGBhgwMMGBjgwP+OA+/gDj4AAAAAAAAOAAH4AA/gQMMGBgzwME8BhvAOPgA/4AD8AAEAAAAAAGAwA4OAHBwAAA="), 46, atob("BAgMDAwMDAwMDAwMBQ=="), 21+(1<<8)+(1<<16));
    g.setFontAlign(-1, 0);
    g.drawString(alt, this.x, this.y + 12);
  }
  WIDGETS["widalt"] = {
    area: "tr",
    width: 24,
    draw: draw
  };

})();
