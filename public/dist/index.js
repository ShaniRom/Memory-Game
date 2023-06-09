var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//needed to load on when the page opens
function appInit() {
    getCards();
}
function getCards() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/new-game")];
                case 1:
                    data = (_a.sent()).data;
                    renderGame(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleNewGame() {
    var openingPage = document.querySelector(".openingPage");
    openingPage.style.display = "none";
}
function renderGame(cards) {
    var root = document.getElementById("root");
    try {
        if (Array.isArray(cards)) {
            console.log(cards);
            var html_1 = "";
            cards.forEach(function (card) {
                html_1 += " <div class=\"card\" onclick='handleFlip(event)' id=\"" + card.id + "\"  data-pair-id=\"" + card.pairId + "\" >\n        \n      <div class=\"card_-front\">\n      \n      </div>\n      <div class=\"card-back\" >\n    <img src=\"" + card.imgUrl + "\"/>\n      </div> \n      \n       </div>";
            });
            root.innerHTML = html_1;
            return;
        }
        throw new Error("no array of cards found");
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
var flippedCards = 0;
var totalFlips = 0;
var firstCard, secondCard;
// <img src=/img/BackCard.png>
function handleFlip(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var chosenCard, bothFlippedCards;
        return __generator(this, function (_a) {
            chosenCard = ev.target.parentNode.parentNode;
            // console.log(chosenCard)
            if (flippedCards < 2) {
                chosenCard.classList.add("flipped");
                flippedCards++;
                console.log(chosenCard);
            }
            else {
                alert("cant click more than two");
                chosenCard.classList.remove("flipped");
                flippedCards = 0;
            }
            if (flippedCards === 2) {
                bothFlippedCards = document.querySelectorAll(".flipped");
                // console.log(chosenCard.dataset.pairId)
                firstCard = bothFlippedCards[0];
                secondCard = bothFlippedCards[1];
                console.log(firstCard);
                console.log(secondCard);
                if (firstCard.dataset.pairId == secondCard.dataset.pairId) {
                    alert("haaa tis a match");
                    firstCard.style.visibility = "hidden";
                    secondCard.style.visibility = "hidden";
                    flippedCards = 0;
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                }
                else {
                    alert("not a match stoopid");
                    flippedCards = 0;
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                }
            }
            return [2 /*return*/];
        });
    });
}
function checkMatches(firstCard, secondCard) { }
