export function g() {
  import("app2/f").then(({ default: f }) => {
    f();
    console.log("g");
  });
}
