import { WebPlugin } from '@capacitor/core';
import { TestAppPlugin } from './definitions';

export class TestAppWeb extends WebPlugin implements TestAppPlugin {
  constructor() {
    super({
      name: 'TestApp',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const TestApp = new TestAppWeb();

export { TestApp };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TestApp);
