import { EXAMPLE, EXAMPLE_DETAIL } from "../../constants/apiEndpoints";
import Send from "../send";

// 전체 조회
export const get_example = async () =>
    await Send(EXAMPLE, "GET", undefined, undefined, true, false);

// 상세 조회
export const get_example_detail = async (id: string) =>
    await Send(EXAMPLE_DETAIL(id), "GET", undefined, undefined, true, false);
