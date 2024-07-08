"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Bai6 = () => {
    (0, react_1.useEffect)(() => {
        const updateTitleWithScrollPosition = () => {
            const scrollPosition = window.scrollY;
            document.title = `Vị trí cuộn: ${scrollPosition}`;
        };
        window.addEventListener("scroll", updateTitleWithScrollPosition);
        return () => {
            window.removeEventListener("scroll", updateTitleWithScrollPosition);
        };
    }, []);
    return (<div style={{ height: "2000px", padding: "20px" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit
        facilis eveniet. Sapiente omnis aspernatur corporis fugit consectetur
        beatae, ad ea amet officiis aliquam, corrupti ratione. Accusamus quas ab
        iste? Minima nulla magnam voluptas accusantium nemo quibusdam, beatae
        error earum! Explicabo, vero ullam? Autem quisquam quos possimus
        cupiditate deleniti minima saepe optio nobis excepturi. Asperiores id
        accusamus molestiae quis tenetur? Natus modi maxime repellat doloremque
        nostrum illum possimus animi, libero at aut distinctio ex nulla,
        excepturi amet velit aspernatur debitis! Corrupti quasi esse facere
        reprehenderit suscipit iure labore dolor minus! Nobis dicta dignissimos
        ex, cupiditate a voluptates? Repudiandae tenetur perferendis blanditiis
        rerum expedita eveniet aliquid vel consequatur laborum ipsum, error esse
        accusantium numquam saepe illum sequi pariatur alias, neque similique.
        Atque numquam totam ab dicta sequi laudantium aspernatur, culpa labore,
        ad quasi nulla. Animi esse, eum officiis saepe sit reiciendis quasi
        repellendus asperiores quia eos, corrupti delectus maxime voluptas
        molestias. Officia incidunt laudantium optio excepturi quo nihil unde
        ipsum alias aliquid repudiandae animi, placeat exercitationem blanditiis
        voluptas molestias adipisci assumenda ullam velit architecto eos? Quod
        consectetur pariatur at ab asperiores. Debitis mollitia voluptates
        obcaecati amet consectetur laboriosam laborum necessitatibus numquam
        aliquid autem dignissimos nemo, architecto error expedita doloribus,
        sapiente consequuntur facere iure nam nesciunt. Veritatis magnam
        quibusdam quam adipisci perferendis? Veritatis sit impedit corporis
        ducimus, dolorum harum doloribus officiis quam commodi aspernatur
        obcaecati iusto fugiat ea aperiam dolore eligendi eos repellendus, unde
        optio expedita asperiores! A aliquid enim alias non! Neque et commodi
        inventore quia rem incidunt, dolores alias tempora. Praesentium at
        consequatur nostrum, eius iste officiis ab optio commodi numquam
        exercitationem nesciunt saepe fuga eaque. Impedit fugiat et blanditiis.
        Neque aliquam quos fugiat quasi nisi sunt odit cum enim pariatur
        aspernatur labore facere deserunt iste magnam minus, unde aut ea quo
        dicta. Inventore molestias molestiae officia aliquid sequi blanditiis!
        At quae repudiandae est pariatur, nesciunt ducimus, expedita iure modi
        minima aut officiis itaque id consequatur excepturi illo, eum quam ut
        nihil laborum esse sint autem quidem. Quia, ratione rem. Numquam hic
        veritatis aperiam pariatur deserunt at non quod obcaecati distinctio.
        Similique modi dolorum officiis nemo autem sit placeat? Voluptate
        officiis libero beatae quam sed deserunt aliquam accusamus maiores
        nobis! Error magnam iste optio. Nihil eius ducimus deleniti, cumque at
        minus iusto ab? Pariatur maiores, iusto doloribus corrupti quos eaque
        illum facilis possimus iure, debitis nesciunt recusandae a repudiandae
        hic? Fuga voluptatum recusandae nisi delectus, amet ipsam eos id eius
        reiciendis voluptates. Iste perspiciatis eum, harum necessitatibus nisi
        alias tempore dolores nam delectus rem sint laudantium vel culpa nobis
        ullam? Possimus quaerat, amet rerum commodi ratione dolores in itaque,
        adipisci nostrum minus officiis facilis placeat tenetur? Ratione
        voluptas id inventore saepe illo et, ipsum pariatur, eveniet harum
        soluta, a dolorum. Itaque, amet sapiente esse ipsam atque, ipsum id
        explicabo voluptate cupiditate nobis autem harum. Fuga enim, magnam
        temporibus officiis repellendus nisi minus ad illum mollitia at a
        blanditiis nulla inventore. Fuga impedit, temporibus eligendi
        exercitationem quaerat inventore repellendus natus autem aut, tempore
        dolorem excepturi porro quos rem iste aliquam animi culpa magni deleniti
        magnam totam at eaque adipisci ducimus. Nemo? Id, aspernatur. Aperiam
        eaque quam, maxime voluptates fugit atque iste. Sequi rerum molestias
        aspernatur autem minus assumenda odit eum, officia consectetur obcaecati
        accusantium quaerat facilis exercitationem consequuntur aut culpa sed.
        Exercitationem, nihil eaque voluptate ex deleniti fugit quam ipsum
        ducimus numquam quos quaerat velit eos laboriosam? Adipisci, ipsam
        harum. Odio, quo? Adipisci repudiandae quae tempore exercitationem eius
        beatae, eveniet culpa. Omnis nisi ratione iusto necessitatibus nulla.
        Reiciendis rem aspernatur veritatis. Illum deserunt fugiat magnam
        perferendis quam. Eaque ex ratione inventore fugit, distinctio eum
        reiciendis libero facere illo animi sit est.
      </p>
    </div>);
};
exports.default = Bai6;
