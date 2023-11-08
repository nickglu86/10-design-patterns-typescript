const wizard = {
    performMagic() {
      return 'puphh ✨🔮🪄💫';
    }
  }
  
  const nick = Object.create(wizard, { name: { value: 'Nick'} });
  
  nick.__proto__;
  Object.getPrototypeOf(nick);
  
  const babyChad = Object.create(nick, { baby: { value: true } });