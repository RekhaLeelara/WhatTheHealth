// NOTE: This code is copied verbatim from https://medium.com/@otterlord/learn-peer-js-video-chat-app-bfaa0e976263 so that I could test if it works. 

const Peer = require('peerjs')

const peer = new Peer();
var currentCall;
peer.on("open", function (id) {
  document.getElementById("uuid").textContent = id;
});

async function callUser() {
    // get the id entered by the user
    const peerId = document.querySelector("input").value;
  // grab the camera and mic
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
  // switch to the video call and play the camera preview
    document.getElementById("menu").style.display = "none";
    document.getElementById("live").style.display = "block";
    document.getElementById("local-video").srcObject = stream;
    document.getElementById("local-video").play();
  // make the call
    const call = peer.call(peerId, stream);
    call.on("stream", (stream) => {
      document.getElementById("remote-video").srcObject = stream;
      document.getElementById("remote-video").play();
    });
    call.on("data", (stream) => {
      document.querySelector("#remote-video").srcObject = stream;
    });
    call.on("error", (err) => {
      console.log(err);
    });
    call.on('close', () => {
      endCall()
    })
  // save the close function
    currentCall = call;
  }

  peer.on("call", (call) => {
    if (confirm(`Accept call from ${call.peer}?`)) {
      // grab the camera and mic
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          // play the local preview
          document.querySelector("#local-video").srcObject = stream;
          document.querySelector("#local-video").play();
  // answer the call
          call.answer(stream);
  // save the close function
          currentCall = call;
  // change to the video view
          document.querySelector("#menu").style.display = "none";
          document.querySelector("#live").style.display = "block";
          call.on("stream", (remoteStream) => {
            // when we receive the remote stream, play it
            document.getElementById("remote-video").srcObject = remoteStream;
            document.getElementById("remote-video").play();
          });
        })
        .catch((err) => {
          console.log("Failed to get local stream:", err);
        });
    } else {
      // user rejected the call, close it
      call.close();
    }
  });
  

  function endCall() {
    // Go back to the menu
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#live").style.display = "none";
  // If there is no current call, return
    if (!currentCall) return;
  // Close the call, and reset the function
    try {
      currentCall.close();
    } catch {}
    currentCall = undefined;
  }