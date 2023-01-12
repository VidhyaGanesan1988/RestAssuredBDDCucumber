package stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.junit.Assert;

import com.google.gson.JsonObject;

import Utilities.ApiConfig;
import Utilities.ExcelReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SkillMapGetStepDefinitions {
	
	String uri;
	public RequestSpecification request;
	int status;
	JsonObject jsonObject;
	String basePath = "/UserSkillsMap";
	Response response;
	String jsonAsString;
	
	@Given("User sets request with authorization for SkillMapGET API")
	public void user_sets_request_with_authorization_for_SkillMapGET_API() {
		this.uri = ApiConfig.BASE_URL + this.basePath; 
		this.request = RestAssured.given().auth().preemptive().basic(ApiConfig.USERNAME, ApiConfig.PASSWORD)
				.header("Content-Type", "application/json");
	}

	@When("User sends GET request for SkillMapGET API")
	public void user_sends_GET_request_for_SkillMapGET_API() {
		response = this.request.get(this.uri);	
		response.then().log().all();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMapGET-GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request(String statuscode) {
		response.then().statusCode(Integer.parseInt(statuscode));
	}

	@When("User sends GET request for SkillMapGET API using User ID from {string} and {int}")
	public void user_sends_GET_request_for_SkillMapGET_API_using_User_ID_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> getData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_id = getData.get(rowNumber).get("user_id");
		
		response = this.request
				.when()
				.get(this.uri + "/" + user_id)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMapGET-GET request using User ID")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_User_ID(String statuscode) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("skillmap"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMapGet/getuserskillMapGetID.json")));
		
	}

	@When("User sends GET request for SkillMapGET API using Skill ID from {string} and {int}")
	public void user_sends_GET_request_for_SkillMapGET_API_using_Skill_ID_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
			ExcelReader excelReader = new ExcelReader();
			List<Map<String,String>> getData = 
					excelReader.getData(ApiConfig.EXCEL, sheetName);
			
			String skill_id = getData.get(rowNumber).get("skill_id");
			
			response = this.request
					.when()
					.get(this.uri + "/" + skill_id)
					.then()
					.log().all().extract().response();
		}
	
	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMapGET-GET request using Skill ID")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_Skill_ID(String statuscode) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("skillmap"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMapGet/getuserskillMapGetSkillID.json")));
	
		System.out.println("UserSkillMapGet-API database successfully Validated!!");
	}

}
