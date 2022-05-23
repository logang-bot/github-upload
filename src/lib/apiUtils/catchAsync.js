export const catchAsyncErrors = (fn) => {
  fn().catch((error) => console.log(error));
};
