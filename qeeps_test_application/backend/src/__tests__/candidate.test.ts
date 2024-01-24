import request from "supertest";
import expressApp from "../index.app";
import "../helpers/env.load";
import { mockResponse } from "../testData/mockResponse";
import { expect, jest, test } from "@jest/globals";
import { Candidate } from "../models/index.models";

describe("/candidates route", () => {
  it("should return a 404 if the resource is not found", async () => {
    const response = await request(expressApp).get(`/wrong-path/`);
    expect(response.statusCode).toBe(404);
  });

  it("should return a status 200 and a list of candidates", async () => {
    jest.spyOn(Candidate, "find").mockImplementationOnce(() => ({
      //@ts-expect-error Jest type error
      populate: jest.fn().mockResolvedValueOnce(mockResponse.results),
    }));
    const response = await request(expressApp).get(`/candidates`);

    expect(response.statusCode).toBe(200);
    expect(Candidate.find).toHaveBeenCalledTimes(1);
  });

  afterEach(() => jest.clearAllMocks());
});
