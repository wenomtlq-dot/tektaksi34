// tektaksi34: tek adres kuralı.
// Ana adres dışındaki adresler (www vb.) kalıcı olarak ana adrese yönlenir.
// workers.dev önizleme adresleri yönlendirilmez.
const ANA = "tektaksi34.com.tr";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== ANA && !url.hostname.endsWith(".workers.dev")) {
      url.protocol = "https:";
      url.hostname = ANA;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
