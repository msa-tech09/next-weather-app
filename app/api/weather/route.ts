import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
}
