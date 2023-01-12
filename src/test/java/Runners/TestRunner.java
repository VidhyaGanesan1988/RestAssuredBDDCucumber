package Runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

	
	@RunWith(Cucumber.class)
	@CucumberOptions(features ="/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features",
			glue = {"stepDefinitions"},
			monochrome = true,
			plugin = {"pretty","junit:target/JUnitReports/report.xml",
						"json:target/JsonReports/report.json",
							 "html:target/HtmlReports"},
	        tags = "@RunAll",
		    strict = true 
	        )


public class TestRunner {

}
