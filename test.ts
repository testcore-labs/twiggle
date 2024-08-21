import Twig from "./src/twig"

var template = Twig.twig({
  data: `The <% 
      const path = this.node.require("path");
      const user = this.node.require(path.join(this.node.process.cwd(), "user.ts"));
      this.meh = user.default;
  %>{{ meh }} is a lie.`
});

console.log(
  template.render()
);