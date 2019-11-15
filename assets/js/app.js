console.log("app is active");

const ATTACK_VALUE = 10;
const MONSTER_ATTACK = 14;
const STRONG_ATTACK = 17;
let chooseMaxLife = 100;
let currentMonsterHealth = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;

adjustHealthBars(chooseMaxLife);

function attackMonster(type) {
  let maxDamage;
  if (type === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("you win!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lose!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("draw!!!");
  }
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
