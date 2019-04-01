package com.ralali.bigagent.android;

import android.content.pm.ActivityInfo;
import android.os.Build;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "curly";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      if (Build.VERSION.SDK_INT == 26) {
          setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
      } else {
          setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
      }
    }
}