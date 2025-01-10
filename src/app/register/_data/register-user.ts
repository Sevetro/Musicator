import { useMutation } from "@tanstack/react-query";

import { RegisterUserData } from "@/shared/entities/user";
import { throwApiError } from "@/utils/throw-api-error";
import { registerUserApiUrl } from "@/api/api-urls";
import { cantReachApiErrorCode } from "@/shared/error-codes";

async function registerUser(body: RegisterUserData) {
  let res: Response;

  try {
    res = await fetch(registerUserApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      // credentials: "include", //TODO: should be used?
    });
  } catch (err) {
    throw new Error(cantReachApiErrorCode);
  }

  if (!res.ok) await throwApiError(res);
}

export const useRegisterUser = () =>
  useMutation<void, Error, RegisterUserData>({
    mutationFn: registerUser,
    mutationKey: ["register"],
  });
