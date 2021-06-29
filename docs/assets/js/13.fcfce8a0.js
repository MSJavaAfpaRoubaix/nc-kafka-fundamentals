(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(e,a,s){"use strict";s.r(a);var t=s(44),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lab05-kafka-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lab05-kafka-streams"}},[e._v("#")]),e._v(" Lab05 - Kafka Streams")]),e._v(" "),s("h2",{attrs:{id:"rappel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rappel"}},[e._v("#")]),e._v(" Rappel")]),e._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"lab05.png",alt:"lab05"}})]),e._v(" "),s("h2",{attrs:{id:"kafka-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-streams"}},[e._v("#")]),e._v(" Kafka Streams")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Kafka Streams est la bibliothèque de stream processing temps réel proposée par Apache Kafka. Elle permet la\ntransformation à la volée de flux continus avec de faibles latences. Elle offre plusieurs types de transformations (\nfiltrage, agrégations, jointures etc).")])]),e._v(" "),s("li",[s("p",[e._v("Il est possible de créer des applications et des microservices orientés streaming d'événements en "),s("code",[e._v("Java Vanilla")]),e._v(" mais\négalement via "),s("code",[e._v("Spring Boot")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Les données d'entrées et de sorties sont stockées au sein du cluster Kafka.")])]),e._v(" "),s("li",[s("p",[e._v("Une application Kafka Streams est au minimum constituée d'un producer (données en sorties) et d'un consumer\n(données en entrées).")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"kk-streams.png",alt:"kk-streams.png"}})]),e._v(" "),s("ul",[s("li",[e._v("Kafka Streams est sous licence Apache 2.0")])]),e._v(" "),s("h2",{attrs:{id:"preparer-le-projet-et-les-topics-kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparer-le-projet-et-les-topics-kafka"}},[e._v("#")]),e._v(" Préparer le projet et les topics Kafka")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("⚠️ Checkout de la branche "),s("code",[e._v("step05")]),e._v(" ⚠️.")])]),e._v(" "),s("li",[s("p",[e._v("Se placer dans le répertoire "),s("code",[e._v("Lab05-kstream")])])]),e._v(" "),s("li",[s("p",[e._v("Explorer le projet Spring Boot "),s("code",[e._v("Lab05-kstream")])]),e._v(" "),s("ul",[s("li",[e._v("La configuration présente dans le fichier "),s("code",[e._v("application.properties")])]),e._v(" "),s("li",[e._v("Le "),s("code",[e._v("StreamBuilder")])])])]),e._v(" "),s("li",[s("p",[e._v("Créer les topics "),s("code",[e._v("vehicle-positions-filtered-avro")]),e._v(" & "),s("code",[e._v("vehicle-positions-light-avro")]),e._v(" en CLI.")])])]),e._v(" "),s("blockquote",[s("p",[e._v("⚠️ Pensez à être présent dans le conteneur "),s("code",[e._v("tools")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it tools "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\nkafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-filtered-avro --replication-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --partitions "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nkafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-light-avro --replication-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --partitions "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),s("h2",{attrs:{id:"un-peu-de-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#un-peu-de-code"}},[e._v("#")]),e._v(" Un peu de code")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Au sein de la classe "),s("code",[e._v("VPKStream")]),e._v(" nous souhaitons réaliser deux opérations via des Streams :")])]),e._v(" "),s("li",[s("p",[e._v("Compléter le code dans la méthode "),s("code",[e._v("startFilterStream()")]),e._v(" pour réaliser un filtrage des records sur le champ "),s("strong",[e._v("oper")]),e._v("\nafin de ne conserver que les records spécifiques à l'opérateur 22 (Nobina Finland Oy). Utilisez le topic de sortie\nsuivant "),s("code",[e._v("vehicle-positions-filtered-avro")]),e._v(". Ce dernier ne doit contenir que des records spécifiques à l'opérateur 22.")])]),e._v(" "),s("li",[s("p",[e._v("Compléter le code dans la méthode "),s("code",[e._v("startLightMappingStream()")]),e._v(" pour réaliser un mapping des données sur le\ntype "),s("code",[e._v("LightPositionValue")]),e._v("\nUtiliser le topic de sortie suivant "),s("code",[e._v("vehicle-positions-filtered-avro")]),e._v(". Ce dernier ne doit contenir que des records\nspécifiques à l'opérateur 22.")])]),e._v(" "),s("li",[s("p",[e._v("N'hésitez pas à parcourir l'ensemble des méthodes présentes dans la classe "),s("code",[e._v("KStream")]),e._v(" afin d'avoir une vue d'ensemble\ndes possibilités offertes par cette dernière.")])]),e._v(" "),s("li",[s("p",[e._v("Au démarrage de l'application les topologies de vos streams sont affichées dans les logs, vous pouvez utiliser la web app\nsuivante : "),s("a",{attrs:{href:"https://zz85.github.io/kafka-streams-viz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zz85.github.io/kafka-streams-viz/"),s("OutboundLink")],1),e._v(") afin de simplifier\nleurs représentations.")])])]),e._v(" "),s("blockquote",[s("p",[e._v("Topology du stream décrit dans la méthode "),s("code",[e._v("startFilterStream()")])])]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("com.zenika.kafka.kstream.VPKStream       : Topologies:\nSub-topology: 0\nSource: KSTREAM-SOURCE-0000000000 (topics: vehicle-positions-avro)\n--\x3e KSTREAM-FILTER-0000000001\nProcessor: KSTREAM-FILTER-0000000001 (stores: [])\n--\x3e KSTREAM-SINK-0000000002\n<-- KSTREAM-SOURCE-0000000000\nSink: KSTREAM-SINK-0000000002 (topic: vehicle-positions-filtered-avro)\n<-- KSTREAM-FILTER-0000000001\n")])])]),s("blockquote",[s("p",[e._v("Topology du stream décrit dans la méthode "),s("code",[e._v("startLightMappingStream()")])])]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("com.zenika.kafka.kstream.VPKStream       : Topologies:\nSub-topology: 0\nSource: KSTREAM-SOURCE-0000000000 (topics: vehicle-positions-avro)\n--\x3e KSTREAM-MAPVALUES-0000000001\nProcessor: KSTREAM-MAPVALUES-0000000001 (stores: [])\n--\x3e KSTREAM-SINK-0000000002\n<-- KSTREAM-SOURCE-0000000000\nSink: KSTREAM-SINK-0000000002 (topic: vehicle-positions-light-avro)\n<-- KSTREAM-MAPVALUES-0000000001\n")])])]),s("h3",{attrs:{id:"demarrer-votre-application-en-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demarrer-votre-application-en-local"}},[e._v("#")]),e._v(" Démarrer votre application en local")]),e._v(" "),s("ul",[s("li",[e._v("Il s'agit d'un projet Maven qui dispose d'un wrapper "),s("code",[e._v("mvnw")]),e._v(" et du plugin "),s("code",[e._v("spring-boot-maven-plugin")]),e._v(", vous pouvez\ndémarrer votre application spring en local à l'aide de la commande suivante :")])]),e._v(" "),s("blockquote",[s("p",[e._v("Se placer dans le bon répertoire "),s("code",[e._v("Lab05-kstream")])])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./mvnw spring-boot:run\n")])])]),s("ul",[s("li",[e._v("Visualiser les modifications des records dans AKHQ: "),s("a",{attrs:{href:"http://akhq:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://akhq:8080/"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"packager-votre-application-avec-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packager-votre-application-avec-docker"}},[e._v("#")]),e._v(" Packager votre application avec Docker")]),e._v(" "),s("ul",[s("li",[e._v("Pour builder et démarrer le conteneur")])]),e._v(" "),s("blockquote",[s("p",[e._v("Se placer dans le bon répertoire "),s("code",[e._v("Lab05-kstream")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker build -t vp-kstream "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker run --name vp-kstream --network"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tz-kafka-network -d vp-kstream\n")])])]),s("h2",{attrs:{id:"solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),s("p",[e._v("Vous vous doutez que pour disposer des solutions de la "),s("code",[e._v("step05")]),e._v(", il vous suffit de️ checkout la branche "),s("code",[e._v("step06")]),e._v(" 😊")])])}),[],!1,null,null,null);a.default=r.exports}}]);