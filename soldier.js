const object = {
  name: "John",
  health: 10,
  weapon: {
    weapon_name: "AK47",
    ammo: 0,
  },
  supplies: 3,

  shoot: function () {
    if (this.weapon.ammo > 0) {
      this.weapon.ammo--;
      console.log("бах-бах");
    } else console.log("обойма пуста. Перезарядитесь");
  },

  reload: function () {
    if (this.weapon.ammo === 0 && this.supplies > 0) {
      this.weapon.ammo = 1;
      this.supplies--;
      console.log("Перезарядка...");
    }
    if (this.supplies <= 0) {
      console.log("Не осталось припасов");
    }
  },
  hurt: function () {
    this.health--
    if (this.health < 10){
        console.log(`Осталось ${this.health} единиц здоровья!`)
    }
    if(this.health === 0) {
console.log("Ты проиграл!")
    }
    return
  },
};
