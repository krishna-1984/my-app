<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
                // Define validation rules
                $validator = Validator::make($request->all(), [
                    'email' => 'required|string|email|max:255',
                    'password' => 'required|string|min:8|max:255',
                ]);

                // Check if validation fails
                if ($validator->fails()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Validation failed.',
                        'error' => $validator->errors()
                    ], 400);
                }

                // Retrieve the user by email
                $user = User::where('email', $request->email)->first();

                // Check if user exists and password is correct
                if (!$user || !Hash::check($request->password, $user->password)) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Invalid login details',
                    ], 401);
                }

                // Generate API token
                $token = $user->createToken('API Token')->plainTextToken;

                return response()->json([
                    'success' => true,
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'message' => 'Logged in successfully.'
                ]);
        } catch (\Throwable $th) {
            return response()->json(['status' => false, 'message' => 'An error occurred.'], 500);
        }
        
    }
}

?>