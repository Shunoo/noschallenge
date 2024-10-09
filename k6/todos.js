import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 }, // Aumenta para 50 usuários em 30 segundos
    { duration: '1m', target: 100 }, // Mantém 100 usuários por 1 minuto
    { duration: '10s', target: 0 },  // Reduz para 0 usuários
  ],
};

export default function () {
  let res = http.get('https://gorest.co.in/public/v2/todos');
  
  // Verifica se o status HTTP é 200
  check(res, {
    'status was 200': (r) => r.status == 200,
  });

  sleep(1); // Espera 1 segundo entre as requisições
}
