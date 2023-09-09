class Settings {

      static instance: Settings;
      public readonly mode = 'dark';

      //prevent new with private constructor
      private constructor() {

      }

      static getInstace(): Settings {
            if(!Settings.instance) {
                  Settings.instance = new Settings();
            }
      
            return Settings.instance;
      }
}

 
      const settings1 = new Settings(); // throws error
      const settings2 = Settings.getInstace();
 
