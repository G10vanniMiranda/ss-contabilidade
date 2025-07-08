### Projeto SS Contabilidade

#### solução email

```
npm install emailjs-com
```

> * 1 Código criando compoennt
```
import emailjs from 'emailjs-com';

const handleEnviar = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    from_name: nome,
    reply_to: email,
    message: mensagem,
  };

  emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams, 'SEU_USER_ID')
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");
    })
    .catch((error) => {
      alert("Erro ao enviar a mensagem: " + error.text);
    });
};

```