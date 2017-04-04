import * as protobuf from "protobufjs";

protobuf.load("./awesome/awesome.proto", (err: Error, root: protobuf.Root) => {
  if (err) throw err;

  let AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
  console.log(`AwesomeMessage=${AwesomeMessage}`);

  let message: any = AwesomeMessage.create({ awesomeField: "hello" });
  console.log(`message["awesomeField"]=${message["awesomeField"]}`);
  console.log(`message.awesomeField=${message.awesomeField}`);

  let buffer = AwesomeMessage.encode(message).finish();
  console.log(`buffer.length=${buffer.length}`);
  console.log(`buffer=[${Array.prototype.toString.call(buffer)}]`);
  console.log(`buffer=${JSON.stringify(buffer)}`);
  console.log(new Buffer(buffer).toString("hex"));
  process.stdout.write("[");
  for (let i = 0; i < buffer.length; i++) {
    process.stdout.write(`${buffer[i].toString(16)}`);
    if (i != buffer.length-1) {
      process.stdout.write(",");
    }
  }
  console.log("]");

  let decoded: any = AwesomeMessage.decode(buffer);
  console.log(`decoded["awesomeField"]=${decoded["awesomeField"]}`);
  console.log(`decoded.awesomeField=${decoded.awesomeField}`);
});
