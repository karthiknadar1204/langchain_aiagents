import { ToolNode } from "@langchain/langgraph/prebuilt";
import { searchTool } from "./searchTool";

export const tools = [searchTool];
export const toolNode = new ToolNode(tools);