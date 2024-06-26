export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    const math = mathFunction();
    queue.unshift(math);
  } catch (error) {
    queue.unshift(`Error: ${error.message}`);
  }

  return queue;
}
