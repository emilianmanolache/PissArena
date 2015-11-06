#pragma strict

function Start () {

}

function Update () {
    var fluvio = GetComponent(Thinksquirrel.Fluvio.FluidParticleSystem);
    var pissSim = fluvio.GetParticleSystem();
    if(Input.GetButtonDown("Fire1") && pissSim.isStopped) {
        pissSim.Play();
    }
    if(!Input.GetButton("Fire1") && pissSim.isPlaying) {
        pissSim.Stop();
    }
}