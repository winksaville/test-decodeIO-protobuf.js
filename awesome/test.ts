import * as protobuf from "protobufjs";

protobuf.load("./awesome/awesome.proto", (err: Error, root: protobuf.Root) => {
  if (err) throw err;

  let AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
  console.log(`AwesomeMessage=${AwesomeMessage}`);

  let message: any = AwesomeMessage.create({ awesomeField: "hello" });
  console.log(`message.awesomeField=${message.awesomeField}`);

  let buffer = AwesomeMessage.encode(message).finish();
  console.log(`buffer.length=${buffer.length}`);
  //for (let i = 0; i < buffer.length; i++) {
  //  console.log(`buffer[${i}]=${buffer[i]}`);
  //}

  let decodedMessage: any = AwesomeMessage.decode(buffer);
  console.log(`decodedMessage.awesomeField=${decodedMessage.awesomeField}`);
});
