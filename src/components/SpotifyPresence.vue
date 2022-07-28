<template>
    <div class="">
        <a href="https://www.last.fm/user/shibbbe">
        <div class="items-center text-gray-200 leading-none lg:rounded-full flex lg:inline-flex">
            <div class="mt-4">
                <span class="text-sm font-medium text-center flex-auto">Listening to 
                <span class="text-sm font-bold text-center flex-auto">{{ title }}</span>
                <span class="text-sm font-regular text-center flex-auto"> by </span>
                <span class="text-sm font-bold text-center flex-auto">{{ artist }}</span></span>
            </div>
        </div>
        </a>
    </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        title: "",
        artist: "",
      };
    },
    beforeMount() {
      window.location.search
      this.getParams()
      this.startPolling()
    },
    methods: {
      getParams() {
        this.username = "USERNAME" // Replace "USERNAME" with your last.fm username
      },
      startPolling() {
        this.fetch();
        window.setTimeout(() => {
          window.requestAnimationFrame(() => {
              this.startPolling();
          });
        }, 2500);
      },
      async fetch() {
        if(!this.username) {
          return
        }
        let apiKey = "API_KEY" // Replace "API_KEY" with your last.fm API key
        let res = await fetch(
          `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.username}&api_key=${apiKey}&format=json`
        );
        let data = await res.json();
        if (data.error) {
          this.isActive = false;
        } else {
          this.isActive = true;
          let track = data.recenttracks.track[0];
          this.artist = track.artist["#text"];
          this.title = track.name;
        }
      }
    }
  };
</script>