import { confirmEmailApiUrl } from "@/api/api-urls";
import { cantReachApiErrorCode } from "@/shared/error-codes";
import { throwApiError } from "@/utils/throw-api-error";
import { redirect } from "next/navigation";

interface Props2 {
  params: Promise<{ token: string }>;
}

interface Props {
  params: {
    token: string;
  };
}

export async function GET(request: Request, { params: { token } }: Props) {
  console.log(`inside validateEmailToken function`);

  let res: Response;

  try {
    console.log(`confirmEmailApiUrl: `, confirmEmailApiUrl);
    console.log(`token: `, token);

    res = await fetch(`${confirmEmailApiUrl}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", //added
      },
    });
    console.log(`validateEmail response: `, res);
  } catch (err) {
    throw new Error(cantReachApiErrorCode, { cause: err });
  }

  if (!res.ok) await throwApiError(res);

  redirect("/confirmation_success");
}
