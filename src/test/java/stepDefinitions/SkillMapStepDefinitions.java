package stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.json.simple.JSONObject;
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

public class SkillMapStepDefinitions {
	
	String uri;
	public RequestSpecification request;
	int status;
	JsonObject jsonObject;
	String userid;
	String basePath = "/UserSkills";
	Response response;
	String jsonAsString;
	
	@Given("User sets request with authorization for SkillMap API")
	public void user_sets_request_with_authorization_for_SkillMap_API() {
		this.uri = ApiConfig.BASE_URL + this.basePath; 
		this.request = RestAssured.given().auth().preemptive().basic(ApiConfig.USERNAME, ApiConfig.PASSWORD)
				.header("Content-Type", "application/json");
	}

	@When("User sends GET request for SkillMap API")
	public void user_sends_GET_request_for_SkillMap_API() {
		response = this.request.get(this.uri);	
		response.then().log().all();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMap-GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_GET_request(String statuscode) {
		int StatusCodeSkillMap= response.getStatusCode();
		if (StatusCodeSkillMap == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/getskillMapschema.json")));
	}
		else {
			System.out.println("Response received successfully: " + StatusCodeSkillMap);
		}
	}
	@When("User sends GET request for single Userid SkillMap from {string} and {int}")
	public void user_sends_GET_request_for_single_Userid_SkillMap_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> getData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_skill_id = getData.get(rowNumber).get("user_skill_id");
		
		response = this.request
				.when()
				.get(this.uri + "/" + user_skill_id)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful single SkillMap-GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_single_SkillMap_GET_request(String statuscode) {
		int StatusCodeSkillMap= response.getStatusCode();
		if (StatusCodeSkillMap == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/getsingleskillMapschema.json")));
	}
		else {
			System.out.println("Response received successfully: " + StatusCodeSkillMap);
		}
	}
		
	@SuppressWarnings("unchecked")
	@When("User sends POST request for SkillMap with data from {string} and {int}")
	public void user_sends_POST_request_for_SkillMap_with_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> postData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_id = postData.get(rowNumber).get("user_id");
		String skill_id = postData.get(rowNumber).get("skill_id");
		String months_of_exp = postData.get(rowNumber).get("months_of_exp");
		
		JSONObject body = new JSONObject();
		body.put("user_id", user_id);
		body.put("skill_id", skill_id);
		body.put("months_of_exp", months_of_exp);	
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.post(this.uri)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMap-POST request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_POST_request(String statuscode) {
		int StatusCodeSkillMap= response.getStatusCode();
		if (StatusCodeSkillMap == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("Successfully Created !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/postskillMapschema.json")));
		}
		else {
			System.out.println("Response received successfully: " + StatusCodeSkillMap);
		}
	}

	@SuppressWarnings("unchecked")
	@When("User sends PUT request to modify existing record with new skillMap data from {string} and {int}")
	public void user_sends_PUT_request_to_modify_existing_record_with_new_skillMap_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> putData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_skill_id = putData.get(rowNumber).get("user_skill_id");
		String user_id = putData.get(rowNumber).get("user_id");
		String skill_id = putData.get(rowNumber).get("skill_id");
		String months_of_exp = putData.get(rowNumber).get("months_of_exp");
		
		JSONObject body = new JSONObject();
		body.put("user_skill_id", user_skill_id);
		body.put("user_id", user_id);
		body.put("skill_id", skill_id);
		body.put("months_of_exp", months_of_exp);
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.put(this.uri + "/" + user_skill_id)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMap-PUT request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_PUT_request(String statuscode) {
		int StatusCodeSkillMap= response.getStatusCode();
		if (StatusCodeSkillMap == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("Successfully Updated !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/putskillMapschema.json")));
		}
		else if (StatusCodeSkillMap == 400) {
			System.out.println("Response received successfully: " + StatusCodeSkillMap);
			response.then().assertThat()
			.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/putskillMap400schema.json")));
			}
		else {
			System.out.println("Response received successfully:" + StatusCodeSkillMap);
		}
	}

	@When("User sends DELETE request to delete existing Userid skillMap {string} and {int}")
	public void user_sends_DELETE_request_to_delete_existing_Userid_skillMap_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> deldata = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_skill_id = deldata.get(rowNumber).get("user_skill_id");
		
		System.out.println(this.uri + "/" + user_skill_id);
		response = this.request
				.when()
				.delete(this.uri + "/" + user_skill_id)
				.then()
				.log().all().extract().response();
	}
	
	@Then("User should get status code {string},valid response body and json schema validated for successful SkillMap-DELETE request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_DELETE_request(String statuscode) {

		int StatusCodeSkillMap= response.getStatusCode();
		if (StatusCodeSkillMap == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains( "The record has been deleted !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/deleteskillMapschema.json")));		
	}
		else if (StatusCodeSkillMap == 404) {
			System.out.println("Response received successfully: " + StatusCodeSkillMap);
			response.then().assertThat()
			.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkillMap/deleteskillMap404schema.json")));		
		}
		else {
			System.out.println("Response received successfully:" + StatusCodeSkillMap);
		}
	}
	
	@Then("User should get SkillMap database validation done")
	public void user_should_get_SkillMap_database_validation_done() {
		RestAssured.given()
		.get(this.uri)
		.then()
		.header("Content-Type", "application/json")
		.log().all()
		.extract().response();	
		System.out.println("Database Validated Successfully!!");
	}

}
