#pragma strict

var system1:GameObject;
var system2:GameObject;
var sound:GameObject;

function Start () {

}

function Update () {
    if(Input.GetButton("Fire1")) {
        system1.GetComponent.<ParticleSystem>().Play();
		system2.GetComponent.<ParticleSystem>().Play();
		sound.SetActive(true);
    }
    if(!Input.GetButton("Fire1")) {
		system1.GetComponent.<ParticleSystem>().Stop();
        system2.GetComponent.<ParticleSystem>().Stop();
		sound.SetActive(false);
    }
}