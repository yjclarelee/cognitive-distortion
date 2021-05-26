import GoogleLogin from "react-google-login";

export default function SignInButton({ history }) {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_ID}
        buttonText="Login"
        onSuccess={() => history.push("/home")}
        onFailure={() => history.push("/signin")}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
