# Capacitor v3 + Yarn v2 Workspace Bug Demo

This repo demonstrates a bug with the Capacitor v3 cli `update` method. Before getting started, ensure you have yarn installed.

## Structure
This monorepo has 2 packages
1. `app`: a react app with capacitor installed
2. `echo`: the default capacitor plugin demo

## Reproduction steps
1. Install workspace dependencies: `yarn`
2. Build Echo plugin: `cd packages/echo && yarn build`
3. Build app: `cd ../app && yarn build`
4. Sync andriod or ios app: `yarn sync-android` or `yarn sync-ios`

`sync-android` is expected to run without errors. To see the error, open Android Studio (`yarn cap open android`) and attemp to run the project. In the Build Output tab, you'll be met with the following:
```
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> Could not resolve all task dependencies for configuration ':app:debugCompileClasspath'.
   > Could not resolve project :echo.
     Required by:
         project :app
      > No matching configuration of project :echo was found. The consumer was configured to find an API of a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
          - None of the consumable configurations have attributes.
```

`sync-ios` will crash with a pod error, indicating that the pod Echo could not be found in the $$virtual path.