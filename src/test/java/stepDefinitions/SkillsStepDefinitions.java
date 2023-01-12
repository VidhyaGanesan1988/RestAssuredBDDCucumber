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

public class SkillsStepDefinitions {
	
	String uri;
	public RequestSpecification request;
	int status;
	JsonObject jsonObject;
	String userid;
	String basePath = "/Skills";
	Response response;
	String jsonAsString;
	
	@Given("User sets request with authorization for Skills API")
	public void user_sets_request_with_authorization_for_Skills_API() {
		this.uri = ApiConfig.BASE_URL + this.basePath; 
		this.request = RestAssured.given().auth().preemptive().basic(ApiConfig.USERNAME, ApiConfig.PASSWORD)
				.header("Content-Type", "application/json");
	}

	@When("User sends GET request for Skills API")
	public void user_sends_GET_request_for_Skills_API() {
		response = this.request.get(this.uri);	
		response.then().log().all();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful Skills-GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_GET_request(String statuscode) {
		int StatusCodeSkill = response.getStatusCode();
		if (StatusCodeSkill == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code" + StatusCodeSkill );
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/getskillschema.json")));
	}
		else {
			System.out.println("Response received successfully: " + StatusCodeSkill);
		}
		}
	@When("User sends GET request for single Userid Skills from {string} and {int}")
	public void user_sends_GET_request_for_single_Userid_Skills_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
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

	@Then("User should get status code {string},valid response body and json schema validated for successful Skills-GET request for Single User")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_GET_request_for_Single_User(String statuscode) {
		int StatusCodeSkill = response.getStatusCode();
		if (StatusCodeSkill == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/getsingleskillschema.json")));
	}
		else {
			System.out.println("Response received successfully: " + StatusCodeSkill);
		}
	}
		
	@SuppressWarnings("unchecked")
	@When("User sends POST request for Skills with data from {string} and {int}")
	public void user_sends_POST_request_for_Skills_with_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> postData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String skill_name = postData.get(rowNumber).get("skill_name");
		
		JSONObject body = new JSONObject();
		body.put("skill_name", skill_name);
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.post(this.uri)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful Skills-POST request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_POST_request(String statuscode) {
		int StatusCodeSkill = response.getStatusCode();
		if (StatusCodeSkill == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code" + StatusCodeSkill );
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("Successfully Created !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/postskillschema.json")));
		}
		else if (StatusCodeSkill == 401) {
			System.out.println("Response received successfully: " + StatusCodeSkill);
			response.then().assertThat()
			.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/postskill401schema.json")));
		}
		else {
			System.out.println("Response received successfully:" + StatusCodeSkill);
		}
	}

	@SuppressWarnings("unchecked")
	@When("User sends PUT request to modify existing record with new skills data from {string} and {int}")
	public void user_sends_PUT_request_to_modify_existing_record_with_new_skills_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> putData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String skill_id = putData.get(rowNumber).get("skill_id");
		String skill_name = putData.get(rowNumber).get("skill_name");
		
		JSONObject body = new JSONObject();
		body.put("skill_id", skill_id);
		body.put("skill_name", skill_name);
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.put(this.uri + "/" + skill_id)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful Skills-PUT request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_PUT_request(String statuscode) {
		int StatusCodeSkill = response.getStatusCode();
		if (StatusCodeSkill == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains("Successfully Updated !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/putskillschema.json")));
		}
		
		else {
			System.out.println("Response received successfully:" + StatusCodeSkill);
		}
	}

	@When("User sends DELETE request to delete existing Userid skills {string} and {int}")
	public void user_sends_DELETE_request_to_delete_existing_Userid_skills_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> deldata = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String skill_id = deldata.get(rowNumber).get("skill_id");
		
		System.out.println(this.uri + "/" + skill_id);
		response = this.request
				.when()
				.delete(this.uri + "/" + skill_id)
				.then()
				.log().all().extract().response();
	}

	@Then("User should get status code {string},valid response body and json schema validated for successful Skills-DELETE request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_DELETE_request(String statuscode) {
		int StatusCodeSkill = response.getStatusCode();
		if (StatusCodeSkill == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains( "The record has been deleted !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/deleteskillschema.json")));
	}
		else if (StatusCodeSkill == 404) {
			System.out.println("Response received successfully: " + StatusCodeSkill);
			response.then().assertThat()
			.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/deleteskill404schema.json")));
		}
		}

	@Then("User should get Skills database validation done")
	public void user_should_get_Skills_database_validation_done() {
		RestAssured.given()
		.get(this.uri)
		.then()
		.header("Content-Type", "application/json")
		.log().all()
		.extract().response();	
		System.out.println("Database Validated Successfully!!");
	}


}
