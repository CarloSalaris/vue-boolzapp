const{createApp} = Vue
var DateTime = luxon.DateTime;

createApp({
    data(){
        return {
            activePosition: 0,
            newMessage: '',
            contactSearch: '',
            dateNow: (DateTime.now()).toLocaleString(DateTime.TIME_24_SIMPLE),
            msgArrowUpPosition: null,
            msgTendinaPosition: null,
            pcTyping: false,
            tempInfoMsg: '',
            userMenu: false,
            chatMenu: false,
            userAccount: [
                {
                    name: 'Carlo',
                    avatar: 'img/user_pic.jpeg'
                }
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'https://picsum.photos/100?random=1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'https://picsum.photos/100?random=2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'https://picsum.photos/100?random=3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'https://picsum.photos/100?random=4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'https://picsum.photos/100?random=5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'https://picsum.photos/100?random=6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'https://picsum.photos/100?random=7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'https://picsum.photos/100?random=8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            quotes: [

            ]
            
        }
    },

    watch: {
        activePosition() {
            this.msgTendinaPosition = null;
        }
    },

    methods: {
        
        lastmsgPreview(index){
            if (this.contacts[index].messages.length !== 0) {
                let message = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
                return message;
            } else {
                console.log('non ci sono messaggi');
            }
        },
        lastmsgDate(index) {
            if (this.contacts[index].messages.length !== 0) {
                let time = (this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(' ')[0]).toLocaleString();
                return time;
            }
        },
        deleteChat(index) {
            this.activePosition = index;
            this.contacts.splice(this.activePosition, 1);
            this.activePosition = 0;
            
        },
        lastReceived() {
            const msgsArr = this.contacts[this.activePosition].messages;
            if (msgsArr.length > 0) {
                
                let msgsReceivedArr = msgsArr.filter(message => message.status === 'received');
                if (msgsReceivedArr.length > 0) {
                return msgsReceivedArr[msgsReceivedArr.length - 1];
                }else {
                    let empty = '';
                    return empty;
                }
            } else {
                let empty = '';
                return empty;
            }
        },
        showSelected(value) {
			this.activePosition = value;
		},
        receiveMessage() {
            // while PC is "texting" (shows "sta scrivendo...")
            this.tempInfoMsg = 'Sta scrivendo...'
            this.pcTyping = true;
            // right after the message is received (shows "online")
            setTimeout(()=>
                {this.contacts[this.activePosition].messages.push({
                    date: this.dateNow,
                    message: 'ok',
                    status: 'received'
                });
                this.tempInfoMsg = 'online';
                console.log(this.tempInfoMsg);
                // 3 seconds after is received (shows time)
                setTimeout(()=>{this.pcTyping = false}, 3000);
                console.log(this.lastReceived());

            }, 1000);
            
        },
        emptyChat() {
            this.contacts[this.activePosition].messages.length = 0;
            this.chatMenu = !this.chatMenu;
        },
        emptyMessage() {
            if (this.newMessage === '' || this.newMessage.trim().length === 0) {
                return true;
            } else {
                return false;
            }
        },

        addMessage() {
            if (!this.emptyMessage()) {
                this.contacts[this.activePosition].messages.push({
                date: this.dateNow,
                message: this.newMessage,
                status: 'sent'
            })
            this.receiveMessage();
            }

            this.newMessage = '';
            console.log(this.contacts[this.activePosition].messages);
            
        },
        showTendina(index) {
            if (this.msgTendinaPosition !== index) {
                this.msgTendinaPosition = index;
                this.msgArrowUpPosition = index;
            } else {
                this.msgTendinaPosition = !index;
                this.msgArrowUpPosition = null;
            }
            console.log('prova showTendina');
        },
        msgDelete(index) {
            this.contacts[this.activePosition].messages.splice(index, 1);
            this.showTendina(index);
        }
    },

    mounted() {
	  //code
        console.log("ho caricato l'app");
    }
}).mount("#app")
/*  */