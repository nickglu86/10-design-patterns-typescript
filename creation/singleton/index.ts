/*
Singleton - A singleton is an object that can only be instantiated once. It is useful fo implementing a global object that can be accessed from anywhere in the application.
*/

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
 
