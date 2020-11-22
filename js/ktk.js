class Carousel {
    constructor(element) {
        this.board = element
        // add first two cards programmatically
        this.push()
        this.push()
        // handle gestures
        this.handle()
    }

    handle() {
        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]

        // get next card
        if (typeof deckImporte[compteurDeck] != 'undefined') {
            this.nextCard = this.cards[this.cards.length - 2]
        } else {
            dumber++;
            this.nextCard = document.getElementById('dumb')
        }

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
            this.nextCard.style.transform = 'translateX(-50%) translateY(-44%) rotate(0deg) rotateY(0deg) scale(0.9)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))
            // pass events data to custom callbacks
            this.hammer.on('tap', (e) => {
                this.onTap(e);
            })
            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })
        }
    }

    onTap(e) {

        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        // get degree of Y rotation (+/-15 degrees)
        let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        // change the transition property
        this.topCard.style.transition = 'transform 100ms ease-out'

        // rotate
        this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(10deg) rotateY(0deg) scale(1)'

        // wait transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)
    }

    onPan(e) {
        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom = (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // calculate new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // calculate rotation, between 0 and +/- 45 deg
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // calculate scale ratio, between 95 and 100 %
        let scale = (90 + (5 * Math.abs(propX))) / 100

        // move top card
        this.topCard.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale next card
        if (this.nextCard) this.nextCard.style.transform = 'translateX(-50%) translateY(-44%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 200ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            // check threshold
            if (propX > 0.05 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.05 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            } else if (propY < -0.05 && e.direction == Hammer.DIRECTION_UP) {

                successful = true
                // get top border position
                posY = -(this.board.clientHeight + this.topCard.clientHeight)
            }

            if (successful) {
                // throw card in the chosen direction
                this.topCard.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'
                if (window.screen.availWidth < 800) {
                    var tempsAttente = 100
                } else {
                    var tempsAttente = 100
                }
                // wait transition end
                setTimeout(() => {
                    if (dumber == 2) {
                        document.body.style.opacity = 0;
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 500);
                    }
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // add new card
                    if (typeof deckImporte[compteurDeck] != 'undefined') {
                        this.push()
                        //Ici on peut voir tous les attributs de la carte actuellement en face du joueur
                        //console.log(this.nextCard.firstChild)
                        if (this.nextCard.firstChild.attributes["data-ctype"].value == 2) {
                            document.body.style.backgroundColor = '#A54040FF';
                            indiceVirus += 1;
                            document.getElementById('virusbadgecontainer').innerHTML = '<span class="virusTicket" onclick="document.getElementById(\'modalVirus\').style.display = \'block\'; document.getElementById(\'board\').style.opacity = 0.3">' + indiceVirus + '*</span>';
                            document.getElementById("dummyvir").insertAdjacentHTML('afterend', "<span class='consigneRetenue'>&#8226; " + this.nextCard.firstChild.children[2].innerHTML.replace(/<\/?[^>]+(>|$)/g, "") + "<br></span>")
                            setTimeout(function () {
                                document.body.style.backgroundColor = couleur_fond;
                            }, 1500)
                        } else if (this.nextCard.firstChild.attributes["data-ctype"].value == 3) {
                            document.body.style.backgroundColor = '#448952FF';
                            indiceVirus -= 1;
                            document.getElementById('virusbadgecontainer').innerHTML = '<span class="virusTicket" onclick="document.getElementById(\'modalVirus\').style.display = \'block\'; document.getElementById(\'board\').style.opacity = 0.3">' + indiceVirus + '*</span>' //ON PEUT PAS FONCTIONNER COMME CA, CERTAINS VIRUS SE CROISENT ET DONC S'ANNULENT MAL DANS LE BLOC NOTE
                            setTimeout(function () {
                                document.body.style.backgroundColor = couleur_fond;
                            }, 1500)
                            let eleme = document.getElementById("listeVirus").children[document.getElementById("listeVirus").children.length - 1]
                            console.log(eleme);
                            eleme.parentNode.removeChild(eleme);
                        } else if (this.nextCard.firstChild.firstChild.innerHTML == "Fosse") {
                            document.body.style.backgroundColor = '#835833FF';
                            setTimeout(function () {
                                document.body.style.backgroundColor = couleur_fond;
                            }, 1500)
                        }
                        if (indiceVirus == 0) {
                            document.getElementById('virusbadgecontainer').innerHTML = ''
                        }
                    }
                    // handle gestures on new top card
                    this.handle()
                }, tempsAttente)
            } else {
                // reset cards position
                this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform = 'translateX(-50%) translateY(-44%) rotate(0deg) rotateY(0deg) scale(0.9)'
            }
        }
    }

    push() {
        let card = document.createElement('div')
        // C'EST ICI QUON CHANGE L'HTML DE LA CARTE.            ---   --  -    ---    - - -         --      ----             - ---         ----              --  -- --- - --  --
        card.classList.add('card')
        var joueurs_appeles = (deckImporte[compteurDeck].text.match(/<j/g) || []).length;
        var jrs_locaux = [];
        var jrs_filtres = [...joueurs]; //copie pure de la liste, pas de reference
        for (let i = 0; i < joueurs_appeles; i++) {
            var index_alea = Math.floor(Math.random() * jrs_filtres.length)
            jrs_locaux.push(jrs_filtres[index_alea])
            jrs_filtres.splice(index_alea, 1)
        };
        if (deckImporte[compteurDeck].type == 2 || deckImporte[compteurDeck].type == 4) {
            var retenus = [];
            for (let i = 0; i < joueurs_appeles; i++) {
                retenus.push(jrs_locaux[i]);
            }
            joueurs_retenus[deckImporte[compteurDeck].id] = Array(retenus)
        } else if (deckImporte[compteurDeck].type == 3 || deckImporte[compteurDeck].type == 5 && joueurs_retenus[deckImporte[compteurDeck].id_phrase][0].length != 0) {
            let lstJoueursreteloc = joueurs_retenus[deckImporte[compteurDeck].id_phrase][0]
            for (let ii in lstJoueursreteloc) {
                jrs_locaux[ii] = lstJoueursreteloc[ii];
            }
        };

        let texteCarteProv = deckImporte[compteurDeck].text.replace(/<j1>/g, jrs_locaux[0]).replace(/<j2>/g, jrs_locaux[1]).replace(/<j3>/g, jrs_locaux[2]).replace(/undefined/g, jrs_filtres[Math.floor(Math.random() * jrs_filtres.length)])

        card.innerHTML = '<div class="cardcont" data-ctype="'+ deckImporte[compteurDeck].type +'"><h5 style="margin-top:10%">' + deckImporte[compteurDeck].titre + '</h5> <img class="illustrCarte" src="' + assocImages[deckImporte[compteurDeck].id_image] + '"> <div class="consigne">' + texteCarteProv + '<div class="shyIndic">#!!#</div></div><div class="logoktk"><img class="logobot" src="assets/logo_kataku_transpar.png"/></div></div>'.replace(/undefined/g, jrs_filtres[Math.floor(Math.random() * jrs_filtres.length)])

        if (deckImporte[compteurDeck].type == 4) {
            card.innerHTML = card.innerHTML.replace('#!!#', 'Suite ⤷')
        } else if (deckImporte[compteurDeck].type == 5) {
            card.innerHTML = card.innerHTML.replace('#!!#', ' — ')
        } else(card.innerHTML = card.innerHTML.replace('#!!#', ''))

        //SCRIPT POUR LES PUBS
        //if (compteurDeck % 8 == 0 && compteurDeck != 0) { // compteurDeck.length / 2) {
        //    card.innerHTML = card.innerHTML.replace(
        //        '<img class="illustrCarte" src="' + assocImages[deckImporte[compteurDeck].id_image] + '">',
        //        '<div style="height:40%; max-width: 100%, margin-bottom:20px;"></div>'
        //    )
        //}

        compteurDeck++; 

        if (this.board.firstChild) {
            this.board.insertBefore(card, this.board.firstChild);
        } else {
            this.board.append(card);
        }
    }
}