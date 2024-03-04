import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wjumwyyulrxlvxssvcor.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdW13eXl1bHJ4bHZ4c3N2Y29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzQ3MTQsImV4cCI6MjAyMjExMDcxNH0.kJXFi0KkrLWJhtCvNtg1izlS6D8C6AmgHLbxbxibJKQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
