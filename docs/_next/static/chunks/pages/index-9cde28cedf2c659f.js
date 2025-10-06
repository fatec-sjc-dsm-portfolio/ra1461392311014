;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3454: function (e, o, a) {
      "use strict"
      var t, r
      e.exports =
        (null == (t = a.g.process) ? void 0 : t.env) &&
        "object" == typeof (null == (r = a.g.process) ? void 0 : r.env)
          ? a.g.process
          : a(7663)
    },
    8312: function (e, o, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(2425)
        },
      ])
    },
    1669: function (e, o, a) {
      "use strict"
      a.d(o, {
        Z: function () {
          return f
        },
      })
      var t = a(5893),
        r = a(1168),
        n = a.n(r),
        s = a(8776),
        i = a.n(s),
        c = a(5410),
        l = a(1664),
        d = a.n(l)
      function u(e) {
        let { className: o } = e
        return (0, t.jsx)(d(), {
          href: "/home",
          children: (0, t.jsxs)("svg", {
            width: "90",
            height: "67.96",
            viewBox: "0 0 178 135",
            xmlns: "http://www.w3.org/2000/svg",
            className: "fill-none stroke-white " + o,
            children: [
              (0, t.jsx)("path", {
                d: "M4 4.03593C19.6524 36.5323 47.8434 105.643 35.3885 122.116C49.7016 103.165 78.579 44.1249 75.8168 39.9337C79.3324 45.2182 104.443 117.378 100.928 122.116C104.945 117.196 108.21 1.66704 124.783 4.03593C141.356 6.40482 122.021 118.289 111.474 122.116C133.572 122.116 171.238 137.605 174 122.116",
                strokeWidth: "7",
              }),
              (0, t.jsx)("path", {
                d: "M58.2038 134C63.4235 93.7144 68.4579 11.8748 46.8384 6.80132C25.2189 1.72786 81.2713 4.68738 112 6.80132",
                strokeWidth: "7",
              }),
              (0, t.jsx)("path", {
                d: "M62 45C68.0866 36.7216 84.0078 21.5788 99 27.2347",
                strokeWidth: "7",
              }),
            ],
          }),
        })
      }
      function m(e) {
        let { href: o, children: a, className: r } = e
        return (0, t.jsx)(d(), {
          href: o,
          className:
            "text-white hover:text-[#F2283C] hover:scale-110 transition-all ease-in-out ".concat(
              r
            ),
          children: a,
        })
      }
      function p() {
        return (0, t.jsxs)("nav", {
          className:
            "p-3 2xl:p-6 text-xl 2xl:text-3xl flex justify-between items-center font-jetbrains text-white",
          children: [
            (0, t.jsx)(u, {
              className:
                "w-20 hover:stroke-[#F2283C] hover:scale-110 transition-all ease-in-out cursor-pointer",
            }),
            (0, t.jsx)("div", {
              className: "gap-4 2xl:gap-8 flex",
              children: c.ow.map((e) =>
                (0, t.jsx)(
                  m,
                  { href: e.reference, children: e.label },
                  e.reference
                )
              ),
            }),
          ],
        })
      }
      function f(e) {
        let { children: o, screen: a = !0 } = e
        return (0, t.jsxs)("div", {
          className: ""
            .concat(n().variable, " ")
            .concat(i().variable, " font-roboto ")
            .concat(a ? "h-screen" : ""),
          children: [(0, t.jsx)(p, {}), o],
        })
      }
    },
    4573: function (e, o, a) {
      "use strict"
      a.d(o, {
        Z: function () {
          return r
        },
      })
      var t = a(5893)
      function r(e) {
        let { children: o, className: a } = e
        return (0, t.jsx)("h2", {
          className:
            "text-2xl xl:text-2xl 2xl:text-5xl font-jetbrains text-[#F2283C] ".concat(
              a
            ),
          children: o,
        })
      }
    },
    879: function (e, o, a) {
      "use strict"
      a.d(o, {
        Z: function () {
          return r
        },
      })
      var t = a(5893)
      function r(e) {
        let { children: o, className: a } = e
        return (0, t.jsx)("h1", {
          className:
            "text-2xl xl:text-3xl 2xl:text-5xl font-jetbrains text-[#875AFB] ".concat(
              a
            ),
          children: o,
        })
      }
    },
    5410: function (e, o, a) {
      "use strict"
      a.d(o, {
        _l: function () {
          return r
        },
        ow: function () {
          return t
        },
      })
      let t = [
          { label: "Sobre", reference: "/about" },
          { label: "Projetos", reference: "/projects" },
          { label: "Contato", reference: "/contact" },
        ],
        r = [
          {
            name: "DataSars",
            anoSemestre: "2023-1",
            academicPartner: "Vanguarda",
            description:
              'Para jornalistas da Rede Vanguarda que desejam acessar, visualizar e analisar dados da COVID Longa, o "Data-SARS" \xe9 um site que permite f\xe1cil acesso a informa\xe7\xf5es relacionadas \xe0 COVID Longa. Diferente de alguns sites que propagam Fake News e n\xe3o possuem filtros de pesquisa, nosso produto fornece dados de forma simples de entender e analisar, j\xe1 que nossas informa\xe7\xf5es s\xe3o aut\xeanticas e oferecemos uma \xe1rea de intera\xe7\xe3o minimalista.',
            personalContributions:
              "Neste projeto atuei como desenvolvedor, desenvolvendo grande parte do Back-end em Flask. Fui respons\xe1vel por todo o processo de raspagem de dados utilizando a biblioteca Selenium, al\xe9m dos gr\xe1ficos feitos com ChartJS. O DataSars foi minha primeira experi\xeancia em uma equipe de desenvolvimento e com a metodologia \xe1gil Scrum, o que trouxe v\xe1rias dificuldades durante o projeto, como falta de comunica\xe7\xe3o, desorganiza\xe7\xe3o e falta de conhecimento. Em alguns momentos, a equipe parecia perdida sem saber como avan\xe7ar. Considerando que n\xe3o era o \xfanico se adaptando a essa forma de trabalho em equipe, o projeto como um todo ficou bastante desorganizado, mas no final conseguimos entregar um bom resultado.",
            technologies: [
              "GIT",
              "Python",
              "Flask",
              "Pandas",
              "Selenium",
              "HTML",
              "CSS",
              "JavaScript",
            ],
            softSkills: [
              "Comunica\xe7\xe3o",
              "Colabora\xe7\xe3o",
              "Trabalho em equipe",
            ],
            whatCanImprove: [
              "Planejamento",
              "Conhecimento das tecnologias usadas no projeto",
              "Comunica\xe7\xe3o",
            ],
            link: "https://github.com/Grupo-Syntax-Squad/API",
            type: "academic",
          },
          {
            name: "CallGenie",
            anoSemestre: "2023-2",
            academicPartner: "FATEC",
            description:
              'Para empresas que buscam implementar solu\xe7\xf5es de gerenciamento de chamados, o "CallGenie" \xe9 um sistema CRUD que possibilita melhor gest\xe3o de chamados, com uma interface minimalista e documentos que auxiliam o usu\xe1rio na utiliza\xe7\xe3o. Neste projeto, implementamos o sistema para uma loja de inform\xe1tica fict\xedcia, por\xe9m ele pode ser aplicado em qualquer \xe1rea que tenha dificuldades no gerenciamento de chamados.',
            personalContributions:
              "Neste projeto, desenvolvi grande parte do back-end usando Express e tamb\xe9m auxiliei na integra\xe7\xe3o do front-end com o back-end. A principal dificuldade foi a falta de conhecimento das tecnologias adotadas, o que me atrasou bastante e tamb\xe9m impactou o ritmo da equipe.",
            technologies: [
              "GIT",
              "HTML",
              "CSS",
              "React",
              "JavaScript",
              "TypeScript",
              "Express",
              "Sequelize",
            ],
            softSkills: ["Adaptabilidade", "Capacidade de resolver problemas"],
            whatCanImprove: ["Planejamento", "Comunica\xe7\xe3o"],
            link: "https://github.com/Grupo-Syntax-Squad/CallGenie",
            type: "academic",
          },
          {
            name: "AssetBox",
            anoSemestre: "2024-1",
            academicPartner: "Youtan",
            description:
              "O projeto tem como objetivo resolver problemas de controle de gest\xe3o de ativos em empresas que utilizam o sistema. Nesse sentido, a aplica\xe7\xe3o deve conter interfaces para monitoramento, registro e controle de ativos, al\xe9m de oferecer op\xe7\xf5es para delega\xe7\xe3o e manipula\xe7\xe3o. \xc9 essencial tamb\xe9m gerar relat\xf3rios de indicadores, emitir notifica\xe7\xf5es sobre o status dos ativos e cadastrar usu\xe1rios respons\xe1veis por eles.",
            personalContributions:
              "Neste projeto atuei como Scrum Master, desenvolvi diversos endpoints da API em Java com SpringBoot e tamb\xe9m realizei a integra\xe7\xe3o de p\xe1ginas do Front-end com os endpoints do Back-end. Meu maior desafio foi assumir pela primeira vez o papel de Scrum Master. Durante os dois primeiros sprints, tive bastante dificuldade em reunir a equipe e identificar os problemas enfrentados, j\xe1 que comunica\xe7\xe3o sempre foi uma \xe1rea mais fraca para mim. Outro desafio inicial foi come\xe7ar o desenvolvimento utilizando uma plataforma de gerenciamento de projetos desconhecida, o que dificultava o acompanhamento do progresso. A partir do segundo sprint, mudei para outra plataforma de gest\xe3o mais adequada, onde tanto eu quanto a equipe conseguimos trabalhar melhor.",
            technologies: [
              "GIT",
              "HTML",
              "CSS",
              "Bulma CSS",
              "React",
              "JavaScript",
              "Java",
              "SpringBoot",
            ],
            softSkills: ["Planejamento", "Trabalho sob press\xe3o"],
            whatCanImprove: ["Planejamento", "Gest\xe3o de tempo"],
            link: "https://github.com/Grupo-Syntax-Squad/AssetBox",
            type: "academic",
          },
          {
            name: "Tup\xe3",
            anoSemestre: "2024-2",
            academicPartner: "Tecsus",
            description:
              "O projeto tem como objetivo criar um sistema de monitoramento para esta\xe7\xf5es meteorol\xf3gicas de baixo custo, registrando dados de sensores como vento, chuva, umidade, temperatura e press\xe3o. O sistema deve armazenar o hist\xf3rico para relat\xf3rios e dashboards, al\xe9m de enviar alertas em leituras an\xf4malas. Ele ser\xe1 adapt\xe1vel a novos sensores e incluir\xe1 explica\xe7\xf5es matem\xe1ticas sobre os c\xe1lculos envolvidos.",
            personalContributions:
              "Neste projeto, contribuo com o desenvolvimento de endpoints no back-end utilizando Django ORM para gerenciar a intera\xe7\xe3o com o banco de dados de forma eficiente. Tamb\xe9m desenvolvemos um servi\xe7o consumer respons\xe1vel por receber, processar e armazenar os dados transmitidos pelas esta\xe7\xf5es. Paralelamente, criei o sistema embarcado que integra os sensores, permitindo a coleta de dados diretamente nas esta\xe7\xf5es. Al\xe9m disso, atuei no time de DevOps, onde definimos diretrizes e fluxos para a realiza\xe7\xe3o de testes de integra\xe7\xe3o — que foi o maior desafio enfrentado ao longo do projeto.",
            technologies: [
              "GIT",
              "CSS",
              "TailwindCSS",
              "NextJS",
              "HighCharts",
              "React",
              "TypeScript",
              "Django",
              "Python",
            ],
            softSkills: ["Planejamento", "Trabalho sob press\xe3o"],
            whatCanImprove: ["Planejamento", "Gest\xe3o de tempo"],
            link: "https://github.com/Grupo-Syntax-Squad/Tupan",
            type: "academic",
          },
          {
            name: "Desenvolvedor de Software - Tecsus",
            description:
              "Atuo no desenvolvimento e manuten\xe7\xe3o de aplica\xe7\xf5es web voltadas \xe0 gest\xe3o de dados e automa\xe7\xe3o de processos, com foco em performance, escalabilidade e qualidade de c\xf3digo. Contribuo para a evolu\xe7\xe3o cont\xednua do ecossistema da empresa, participando desde a implementa\xe7\xe3o de novas funcionalidades at\xe9 a integra\xe7\xe3o entre sistemas e servi\xe7os internos.",
            personalContributions:
              "Cria\xe7\xe3o de endpoints, integra\xe7\xe3o de APIs e realiza\xe7\xe3o de testes.",
            technologies: [
              "Python",
              "FastAPI",
              "Typescript",
              "React",
              "PostgreSQL",
              "AWS",
              "Realiza\xe7\xe3o de testes",
              "Microsservi\xe7os",
              "gRPC",
            ],
            link: "https://www.tecsus.com.br",
            type: "professional",
            periods: [
              {
                role: "Estagi\xe1rio em Desenvolvimento de Software",
                start: "Novembro de 2024",
                end: "Agosto de 2025",
              },
              {
                role: "Desenvolvedor de Software J\xfanior",
                start: "Agosto de 2025",
              },
            ],
          },
        ].reverse()
    },
    2425: function (e, o, a) {
      "use strict"
      a.r(o),
        a.d(o, {
          default: function () {
            return c
          },
        })
      var t = a(5893)
      a(6501)
      var r = a(879),
        n = a(4573),
        s = a(1669),
        i = a(3454)
      function c() {
        return (0, t.jsx)(s.Z, {
          children: (0, t.jsx)("main", {
            className:
              "px-10 pt-5 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto",
            children: (0, t.jsxs)("div", {
              className: "gap-20 flex",
              children: [
                (0, t.jsxs)("span", {
                  className: "gap-3 flex flex-col",
                  children: [
                    (0, t.jsx)(n.Z, { children: "Ol\xe1, meu nome \xe9" }),
                    (0, t.jsx)("h1", {
                      className: "text-4xl xl:text-5xl 2xl:text-8xl text-white",
                      children: "Wellington Luiz de Faria",
                    }),
                    (0, t.jsx)(r.Z, { children: "Desenvolvedor de Software" }),
                  ],
                }),
                (0, t.jsx)("img", {
                  src: "".concat(
                    i.env.NEXT_PUBLIC_BASE_PATH || "",
                    "https://fatec-sjc-dsm-portfolio.github.io/ra1461392311014/images/perfil.jpg"
                  ),
                  alt: "Foto de perfil",
                  className: "w-50 h-50 rounded-full object-cover",
                }),
              ],
            }),
          }),
        })
      }
    },
    6501: function () {},
    7663: function (e) {
      !(function () {
        var o = {
            229: function (e) {
              var o,
                a,
                t,
                r = (e.exports = {})
              function n() {
                throw Error("setTimeout has not been defined")
              }
              function s() {
                throw Error("clearTimeout has not been defined")
              }
              function i(e) {
                if (o === setTimeout) return setTimeout(e, 0)
                if ((o === n || !o) && setTimeout)
                  return (o = setTimeout), setTimeout(e, 0)
                try {
                  return o(e, 0)
                } catch (a) {
                  try {
                    return o.call(null, e, 0)
                  } catch (a) {
                    return o.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  o = "function" == typeof setTimeout ? setTimeout : n
                } catch (e) {
                  o = n
                }
                try {
                  a = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                  a = s
                }
              })()
              var c = [],
                l = !1,
                d = -1
              function u() {
                l &&
                  t &&
                  ((l = !1),
                  t.length ? (c = t.concat(c)) : (d = -1),
                  c.length && m())
              }
              function m() {
                if (!l) {
                  var e = i(u)
                  l = !0
                  for (var o = c.length; o; ) {
                    for (t = c, c = []; ++d < o; ) t && t[d].run()
                    ;(d = -1), (o = c.length)
                  }
                  ;(t = null),
                    (l = !1),
                    (function (e) {
                      if (a === clearTimeout) return clearTimeout(e)
                      if ((a === s || !a) && clearTimeout)
                        return (a = clearTimeout), clearTimeout(e)
                      try {
                        a(e)
                      } catch (o) {
                        try {
                          return a.call(null, e)
                        } catch (o) {
                          return a.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function p(e, o) {
                ;(this.fun = e), (this.array = o)
              }
              function f() {}
              ;(r.nextTick = function (e) {
                var o = Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var a = 1; a < arguments.length; a++)
                    o[a - 1] = arguments[a]
                c.push(new p(e, o)), 1 !== c.length || l || i(m)
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = f),
                (r.addListener = f),
                (r.once = f),
                (r.off = f),
                (r.removeListener = f),
                (r.removeAllListeners = f),
                (r.emit = f),
                (r.prependListener = f),
                (r.prependOnceListener = f),
                (r.listeners = function (e) {
                  return []
                }),
                (r.binding = function (e) {
                  throw Error("process.binding is not supported")
                }),
                (r.cwd = function () {
                  return "/"
                }),
                (r.chdir = function (e) {
                  throw Error("process.chdir is not supported")
                }),
                (r.umask = function () {
                  return 0
                })
            },
          },
          a = {}
        function t(e) {
          var r = a[e]
          if (void 0 !== r) return r.exports
          var n = (a[e] = { exports: {} }),
            s = !0
          try {
            o[e](n, n.exports, t), (s = !1)
          } finally {
            s && delete a[e]
          }
          return n.exports
        }
        t.ab = "//"
        var r = t(229)
        e.exports = r
      })()
    },
  },
  function (e) {
    e.O(0, [959, 793, 888, 774, 179], function () {
      return e((e.s = 8312))
    }),
      (_N_E = e.O())
  },
])
