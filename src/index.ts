//exercices 1
const response: [string, number] = ["{}", 400];
console.log(response);

//exercices 2
const responses: [string, number][] = [
  ["{}", 400],
  ["{}", 200],
];
console.log(responses);

/*exercices 3
 *Como enum sempre começar com letra maiúscula
 */
enum OrderStatus {
  WaitingForPayment = "Aguardando pagamento",
  PaymentApproved = "Pagamento aprovado",
}

const orderStatus = OrderStatus.WaitingForPayment;
console.log(OrderStatus);

//exercices 4
const sub = (x: number, y: number): number => {
  return x - y;
};
console.log(sub(10, 5));

//exercices 5
const printlog = (message: string | number): void => {
  console.log(message);
};
printlog("Hello world");

//exercices 6
const cid: any = "123456789";
const customerId = cid as number;
console.log(customerId);

export {};
