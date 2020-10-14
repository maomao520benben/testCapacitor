declare module '@capacitor/core' {
  interface PluginRegistry {
    TestApp: TestAppPlugin;
  }
}

export interface TestAppPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
