package com.hackathon.autoglass;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		WebView w=(WebView) findViewById(R.id.web);
				w.getSettings().setJavaScriptEnabled(true);
	        w.setWebChromeClient(new WebChromeClient());
	  
	       //w.loadUrl("http://10.0.2.2/hackathon/index.html");
	       w.loadUrl("http://172.30.200.40:80/hackathon/indexs.html");
	        
	       
	}


}
