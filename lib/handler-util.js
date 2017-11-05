'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました～（４０１ってや～つ）');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりませ～ん（４０４ってや～つ）');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドで～す（４００、Bad Requestってや～つ）');
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};